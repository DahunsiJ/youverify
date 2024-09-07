terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-backend-rg"
    storage_account_name = "yvterraformbackendstore"
    container_name       = "aks_tfstate"
    key                  = "aks_server.tfstate"
  }
}
