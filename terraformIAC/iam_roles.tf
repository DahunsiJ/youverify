# IAM Role Assignment for Jenkins VM to create AKS Cluster
resource "azurerm_role_assignment" "yv_jenkins_aks_contributor" {
  scope                = azurerm_resource_group.yv_rg.id  # Scope is the resource group containing the AKS resources
  role_definition_name = "Contributor"                    # This role grants permission to manage resources, including AKS
  principal_id         = azurerm_linux_virtual_machine.yv_jenkins_vm.identity[0].principal_id # System-assigned identity of the Jenkins VM

  depends_on = [azurerm_linux_virtual_machine.yv_jenkins_vm] # Ensure the VM is created before applying this role assignment
}

# You may also need to assign the Network Contributor role if AKS will create its own virtual network
resource "azurerm_role_assignment" "yv_jenkins_network_contributor" {
  scope                = azurerm_virtual_network.yv_vnet.id  # Scope is the virtual network where the AKS will be deployed
  role_definition_name = "Network Contributor"               # This role grants permission to manage virtual networks
  principal_id         = azurerm_linux_virtual_machine.yv_jenkins_vm.identity[0].principal_id

  depends_on = [azurerm_linux_virtual_machine.yv_jenkins_vm]
}
