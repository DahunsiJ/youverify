output "public_ip_address" {
  description = "The public IP address of the monitoring server."
  value       = azurerm_public_ip.yv_public_ip.ip_address
}



output "elasticsearch_url" {
  value       = "http://${azurerm_public_ip.yv_public_ip.ip_address}:9200"
  description = "The URL to access Elasticsearch"
}

output "kibana_url" {
  value       = "http://${azurerm_public_ip.yv_public_ip.ip_address}:5601"
  description = "The URL to access Kibana"
}

output "logstash_url" {
  value       = "http://${azurerm_public_ip.yv_public_ip.ip_address}:5044"
  description = "The URL to access Logstash"
}






output "vm_id" {
  description = "The ID of the monitoring VM."
  value       = azurerm_linux_virtual_machine.yv_monitoring_vm.id
}

output "resource_group_name" {
  description = "The name of the resource group."
  value       = azurerm_resource_group.yv_rg.name
}

output "vnet_name" {
  description = "The name of the virtual network."
  value       = azurerm_virtual_network.yv_vnet.name
}

output "subnet_name" {
  description = "The name of the subnet."
  value       = azurerm_subnet.yv_subnet.name
}
