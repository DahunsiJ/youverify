terraform {
  backend "azurerm" {
    resource_group_name  = "terraform_backend-rg"
    storage_account_name = "yvterraformbackendstore"
    container_name       = "monitoringtfstate"
    key                  = "monitorserver.tfstate"
  }
}




# az storage container create \
#   --name monitoringtfstate \
#   --account-name yvterraformbackendstore \
#   --resource-group terraform_backend-rg
