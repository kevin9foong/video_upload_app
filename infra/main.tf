terraform {
  required_providers {
    # google = {
    #   source = "hashicorp/google"
    #   version = "4.51.0"
    # }
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

# provider "google" {
#   credentials = file("<NAME>.json")

#   project = "<PROJECT_ID>"
#   region  = "us-central1"
#   zone    = "us-central1-c"
# }

provider "docker" {
  host = "unix:///var/run/docker.sock"
}

# # Create new storage bucket in the US multi-region
# resource "random_id" "bucket_prefix" {
#   byte_length = 8
# }

# # To store the uploaded videos
# resource "google_storage_bucket" "videos_bucket" {
#   name          = "${random_id.bucket_prefix.hex}-videos-bucket"
#   location      = "US"
#   storage_class = "STANDARD"
#   force_destroy = true
#   uniform_bucket_level_access = true
# }

# resource "docker_registry_image" "server_image" {
#   name          = docker_image.server_image.name
# }

resource "docker_image" "server_image" {
  name = "gcr.io/videos/server:1.0"
  build {
    context = "../server"
  }
}

# resource "docker_registry_image" "client_image" {
#   name          = docker_image.client_image.name
# }

resource "docker_image" "client_image" {
  name = "gcr.io/videos/web:1.0"
  build {
    context = "../web"
  }
}
