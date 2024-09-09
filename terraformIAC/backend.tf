terraform {
  backend "azurerm" {
    resource_group_name  = "terraform_backend-rg"     # The resource group where your storage account is.
    storage_account_name = "yvterraformbackend"  # The name of your storage account.
    container_name       = "tfstate"                  # The container for storing Terraform state files.
    key                  = "devsecops-server.tfstate" # A unique key to identify the state file.
  }
}



# az storage container create \
#   --name tfstate \
#   --account-name yvterraformbackend \
#   --resource-group terraform_backend-rg

