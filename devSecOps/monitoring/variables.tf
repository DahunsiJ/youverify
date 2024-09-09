variable "location" {
  description = "Azure region"
  type        = string
  default     = "West US"
}

variable "admin_username" {
  description = "Admin username for the VM"
  type        = string
  default     = "yv-admin"
}

variable "ssh_key_path" {
  description = "Path to the SSH public key"
  type        = string
  default     = "~/.ssh/yv_key.pub"
}

variable "vm_size" {
  description = "Size of the VM"
  type        = string
  default     = "Standard_B4ms"
}

variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
  default     = "yv-monitoring-rg"
}

variable "vnet_name" {
  description = "Name of the virtual network"
  type        = string
  default     = "yv-monitoring-vnet"
}

variable "subnet_name" {
  description = "Name of the subnet"
  type        = string
  default     = "yv-monitoring-subnet"
}

variable "nsg_name" {
  description = "Name of the Network Security Group"
  type        = string
  default     = "yv-monitoring-nsg"
}

variable "public_ip_name" {
  description = "Name of the Public IP"
  type        = string
  default     = "yv-monitoring-pip"
}

variable "network_interface_name" {
  description = "Name of the Network Interface"
  type        = string
  default     = "yv-monitoring-nic"
}

variable "vm_name" {
  description = "Name of the Virtual Machine"
  type        = string
  default     = "yv-monitoringvm"
}


variable "subscription_id" {}
variable "tenant_id" {}

