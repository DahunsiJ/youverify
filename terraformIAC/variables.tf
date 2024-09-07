# Variable for Azure Location
variable "location" {
  description = "The Azure region to deploy resources"
  default     = "East US"
}

# Variable for Admin Username
variable "admin_username" {
  description = "Admin username for VMs"
  default     = "yv_admin"
}

variable "subscription_id" {}
variable "tenant_id" {}
