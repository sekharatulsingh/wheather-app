provider "aws" {
  region = "us-east-1"
}

resource "aws_eks_cluster" "weather_cluster" {
  name     = "weather-app-cluster"
  role_arn = aws_iam_role.eks_role.arn
  vpc_config {
    subnet_ids = aws_subnet.public.*.id
  }
}

output "cluster_endpoint" {
  value = aws_eks_cluster.weather_cluster.endpoint
}