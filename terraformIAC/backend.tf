terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-backend-rg"     # The resource group where your storage account is.
    storage_account_name = "yvterraformbackendstore"  # The name of your storage account.
    container_name       = "tfstate"                  # The container for storing Terraform state files.
    key                  = "devsecops-server.tfstate" # A unique key to identify the state file.
  }
}
