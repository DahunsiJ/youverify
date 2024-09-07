# Enable Azure Security Center Standard Tier
resource "azurerm_security_center_subscription_pricing" "standard_pricing" {
  tier = "Standard"
}
