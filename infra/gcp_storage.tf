# Create new storage bucket in the US multi-region
resource "random_id" "bucket_prefix" {
  byte_length = 8
}

# To store the uploaded videos
resource "google_storage_bucket" "videos_bucket" {
  name                        = "${random_id.bucket_prefix.hex}-videos-bucket"
  location                    = "US"
  storage_class               = "STANDARD"
  force_destroy               = true
  uniform_bucket_level_access = true
}