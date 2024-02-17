resource "google_artifact_registry_repository" "videos" {
  location      = "us-central1"
  repository_id = "videos"
  format        = "DOCKER"
}

# resource "docker_registry_image" "server_image" {
#   name = docker_image.server_image.name

#   depends_on = [google_artifact_registry_repository.videos]
# }

# resource "docker_image" "server_image" {
#   name = "gcr.io/videos/server:1.0"
#   build {
#     context = "../server"
#   }

# }

# resource "docker_registry_image" "client_image" {
#   name = docker_image.client_image.name

#   depends_on = [google_artifact_registry_repository.videos]
# }

# resource "docker_image" "client_image" {
#   name = "gcr.io/videos/web:1.0"
#   build {
#     context = "../web"
#   }
# }