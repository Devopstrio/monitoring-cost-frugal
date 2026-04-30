resource "kubernetes_deployment" "prometheus" {
  metadata {
    name      = "prometheus-frugal"
    namespace = var.namespace
    labels = {
      app = "prometheus"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "prometheus"
      }
    }
    template {
      metadata {
        labels = {
          app = "prometheus"
        }
      }
      spec {
        container {
          name  = "prometheus"
          image = "prom/prometheus:v2.45.0"
          
          args = [
            "--config.file=/etc/prometheus/prometheus.yml",
            "--storage.tsdb.retention.time=${var.hot_retention_days}d",
            "--storage.tsdb.path=/prometheus",
            "--web.enable-lifecycle"
          ]

          port {
            container_port = 9090
          }

          volume_mount {
            name       = "prometheus-storage"
            mount_path = "/prometheus"
          }
        }
        
        volume {
          name = "prometheus-storage"
          persistent_volume_claim {
            claim_name = var.pvc_name
          }
        }
      }
    }
  }
}
