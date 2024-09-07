# Network Security Group
# Description: NSG creation with inbound rules for ssh, Jenkins, SonarQube, my application, HTTP, and HTTPS

resource "azurerm_network_security_group" "yv_nsg" {
  name                = "yv-nsg"
  location            = azurerm_resource_group.yv_rg.location
  resource_group_name = azurerm_resource_group.yv_rg.name

  # Allow SSH traffic on port 22
  security_rule {
    name                       = "Allow_SSH_Inbound"
    priority                   = 101
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22" # SSH port
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  # Allow HTTP traffic on port 80
  security_rule {
    name                       = "Allow_HTTP_Inbound"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "80" # HTTP port
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  # Allow HTTPS traffic on port 443
  security_rule {
    name                       = "Allow_HTTPS_Inbound"
    priority                   = 110
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "443" # HTTPS port
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  # Allow Jenkins traffic on port 8080
  security_rule {
    name                       = "Allow_Jenkins_Inbound"
    priority                   = 120
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "8080" # Jenkins port
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  # Allow SonarQube traffic on port 9000
  security_rule {
    name                       = "Allow_SonarQube_Inbound"
    priority                   = 130
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "9000" # SonarQube port
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  # Allow application traffic on port 3002
  security_rule {
    name                       = "Allow_App_Inbound"
    priority                   = 140
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "3002" # Application port
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}
