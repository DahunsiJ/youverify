resource "azurerm_resource_group" "yv_rg" {
  name     = var.resource_group_name
  location = var.location

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}

resource "azurerm_virtual_network" "yv_vnet" {
  name                = var.vnet_name
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.yv_rg.location
  resource_group_name = azurerm_resource_group.yv_rg.name

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}

resource "azurerm_subnet" "yv_subnet" {
  name                 = var.subnet_name
  resource_group_name  = azurerm_resource_group.yv_rg.name
  virtual_network_name = azurerm_virtual_network.yv_vnet.name
  address_prefixes     = ["10.0.1.0/24"]

  service_endpoints = ["Microsoft.Storage"]


}

resource "azurerm_public_ip" "yv_public_ip" {
  name                = var.public_ip_name
  location            = azurerm_resource_group.yv_rg.location
  resource_group_name = azurerm_resource_group.yv_rg.name
  allocation_method   = "Static"

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}

resource "azurerm_subnet_network_security_group_association" "yv_subnet_nsg_association" {
  subnet_id                 = azurerm_subnet.yv_subnet.id
  network_security_group_id = azurerm_network_security_group.yv_nsg.id
}


resource "azurerm_network_interface" "yv_nic" {
  name                = var.network_interface_name
  location            = azurerm_resource_group.yv_rg.location
  resource_group_name = azurerm_resource_group.yv_rg.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.yv_subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.yv_public_ip.id
  }


  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}

resource "azurerm_linux_virtual_machine" "yv_monitoring_vm" {
  name                = var.vm_name
  resource_group_name = azurerm_resource_group.yv_rg.name
  location            = azurerm_resource_group.yv_rg.location
  size                = var.vm_size
  admin_username      = var.admin_username

  network_interface_ids = [
    azurerm_network_interface.yv_nic.id,
  ]

  identity {
    type = "SystemAssigned"
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "StandardSSD_LRS"
    disk_size_gb         = 30
  }

  admin_ssh_key {
    username   = var.admin_username
    public_key = file(var.ssh_key_path)
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }

  custom_data = filebase64("${path.module}/install.sh")

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }

  disable_password_authentication = true
}
