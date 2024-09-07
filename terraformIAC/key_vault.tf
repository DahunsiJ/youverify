# Azure Key Vault
resource "azurerm_key_vault" "yv_key_vault" {
  name                = "yv-key-vault"
  location            = azurerm_resource_group.yv_rg.location
  resource_group_name = azurerm_resource_group.yv_rg.name
  tenant_id           = data.azurerm_client_config.current.tenant_id
  sku_name            = "standard"

  #   soft_delete_enabled         = true
  purge_protection_enabled = true

  tags = {
    environment = "DevSecOps"
    source      = "terraform"
    owner       = "Justus"
  }
}

# Key Vault Access Policy for Jenkins VM
resource "azurerm_key_vault_access_policy" "yv_jk_access_policy" {
  key_vault_id = azurerm_key_vault.yv_key_vault.id
  tenant_id    = data.azurerm_client_config.current.tenant_id
  object_id    = azurerm_linux_virtual_machine.yv_jenkins_vm.identity[0].principal_id

  secret_permissions = [
    "Get", "List", "Set", "Delete",
  ]
}


data "azurerm_client_config" "current" {}
