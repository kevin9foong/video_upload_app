terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}
provider "google" {
  credentials = file(var.service_account_json_path)

  project = "video-upload-app-414612"
  region  = "us-central1"
  zone    = "us-central1-c"
}

# data "google_service_account" "registry_pusher" {
#   account_id = "terraform"
# }

# resource "google_service_account_key" "registry_pusher_key" {
#   service_account_id = data.google_service_account.registry_pusher.name

#   depends_on = [data.google_service_account.registry_pusher]
# }

# data "google_service_account_key" "registry_pusher_key" {
#   name            = google_service_account_key.registry_pusher_key.name
#   public_key_type = "TYPE_X509_PEM_FILE"

#   depends_on = [google_service_account_key.registry_pusher_key]
# }

# provider "docker" {
#   host = "unix:///var/run/docker.sock"

#   registry_auth {
#     address  = "gcr.io"
#     username = data.google_service_account.registry_pusher.email
#     password = data.google_service_account_key.registry_pusher_key.public_key
#   }
# }

# Return service URL
# output "url" {
#   value = google_cloud_run_service.default.status[0].url
# }