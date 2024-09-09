variable "resource_group_name" {
  description = "The name of the resource group for the AKS cluster"
  type        = string
}

variable "location" {
  description = "The Azure location where the AKS cluster will be created"
  type        = string
  default     = "westus"
}

variable "aks_cluster_name" {
  description = "The name of the AKS cluster"
  type        = string
}

variable "node_count" {
  description = "The number of nodes in the AKS cluster"
  type        = number
  default     = 2
}

variable "node_vm_size" {
  description = "The VM size for the AKS cluster nodes"
  type        = string
  default     = "Standard_DS2_v2"
}

variable "dns_prefix" {
  description = "The DNS prefix for the AKS cluster"
  type        = string
}

variable "subscription_id" {}
variable "tenant_id" {}

