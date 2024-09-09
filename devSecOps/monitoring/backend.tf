terraform {
  backend "azurerm" {
    resource_group_name  = "terraform_backend-rg"
    storage_account_name = "yvterraformbackend"
    container_name       = "monitoringtfstate"
    key                  = "monitorserver.tfstate"
  }
}




# az storage container create \
#   --name monitoringtfstate \
#   --account-name yvterraformbackend \
#   --resource-group terraform_backend-rg
