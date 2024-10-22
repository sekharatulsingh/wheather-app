provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "weather_rg" {
  name     = "weather-app-rg"
  location = "East US"
}

resource "azurerm_kubernetes_cluster" "weather_cluster" {
  name                = "weather-app-cluster"
  location            = azurerm_resource_group.weather_rg.location
  resource_group_name = azurerm_resource_group.weather_rg.name
  dns_prefix          = "weatherapp"

  default_node_pool {
    name       = "default"
    node_count = 2
    vm_size    = "Standard_DS2_v2"
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin    = "azure"
    load_balancer_sku = "standard"
  }
}

output "kube_config" {
  value = azurerm_kubernetes_cluster.weather_cluster.kube_config_raw
}

output "cluster_endpoint" {
  value = azurerm_kubernetes_cluster.weather_cluster.fqdn
}
