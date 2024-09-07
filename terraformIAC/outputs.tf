output "jenkins_public_ip" {
  description = "Public IP of the Jenkins Server"
  value       = azurerm_public_ip.yv_public_ip.ip_address
}
