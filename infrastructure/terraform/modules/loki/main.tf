resource "kubernetes_deployment" "loki" {
  metadata {
    name      = "loki-frugal"
    namespace = var.namespace
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "loki"
      }
    }
    template {
      metadata {
        labels = {
          app = "loki"
        }
      }
      spec {
        container {
          name  = "loki"
          image = "grafana/loki:2.8.2"
          
          args = [
            "-config.file=/etc/loki/local-config.yaml"
          ]

          port {
            container_port = 3100
          }

          volume_mount {
            name       = "loki-storage"
            mount_path = "/loki"
          }
        }

        volume {
          name = "loki-storage"
          persistent_volume_claim {
            claim_name = var.pvc_name
          }
        }
      }
    }
  }
}
