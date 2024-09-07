
# Resource Group
resource "azurerm_resource_group" "yv_rg" {
  name     = "yv_devsecops_rg"
  location = var.location

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}

# Virtual Network
resource "azurerm_virtual_network" "yv_vnet" {
  name                = "yv_vnet"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.yv_rg.location
  resource_group_name = azurerm_resource_group.yv_rg.name

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}

# Subnet
resource "azurerm_subnet" "yv_subnet" {
  name                 = "yv_subnet"
  resource_group_name  = azurerm_resource_group.yv_rg.name
  virtual_network_name = azurerm_virtual_network.yv_vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}

# Jenkins VM
resource "azurerm_linux_virtual_machine" "yv_jenkins_vm" {
  name                = "yv-jenkins-vm"
  resource_group_name = azurerm_resource_group.yv_rg.name
  location            = azurerm_resource_group.yv_rg.location
  size                = "Standard_B4ms"
  admin_username      = var.admin_username

  network_interface_ids = [
    azurerm_network_interface.yv_jenkins_nic.id,
  ]

  identity {
    type = "SystemAssigned"
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "StandardSSD_LRS"
    disk_size_gb         = 30
  }

  # Use your public key here
  admin_ssh_key {
    username   = var.admin_username
    public_key = file("~/.ssh/yv_key.pub") # Path to your public key
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }

  custom_data = filebase64("jenkins_server_script.sh")

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }


  disable_password_authentication = true

}

# Create a public IP for the VM
resource "azurerm_public_ip" "yv_public_ip" {
  name                = "yv-public-ip"
  location            = azurerm_resource_group.yv_rg.location
  resource_group_name = azurerm_resource_group.yv_rg.name
  allocation_method   = "Static"
  sku                 = "Basic"

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}

# Network Interface for Jenkins VM
resource "azurerm_network_interface" "yv_jenkins_nic" {
  name                = "yv-jenkins-nic"
  location            = azurerm_resource_group.yv_rg.location
  resource_group_name = azurerm_resource_group.yv_rg.name

  ip_configuration {
    name                          = "yv-ip-config"
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
