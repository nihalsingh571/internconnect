variable "project_name" {
  description = "Project/app name prefix"
  type        = string
  default     = "internconnect"
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "container_port" {
  description = "Container port for the app"
  type        = number
  default     = 80
}

variable "desired_count" {
  description = "ECS service desired count"
  type        = number
  default     = 1
}

