#!/bin/bash

# Exit immediately if a command exits with a non-zero status
# set -e

# -------------------------------
# 1. Update System Packages
# -------------------------------
echo "Updating system packages..."
sudo apt-get update -y

# -------------------------------
# 2. Install Docker
# -------------------------------
echo "Installing Docker..."
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker

# Add the current user to the docker group (optional)
sudo usermod -aG docker $USER
newgrp docker

# Note: To apply the group change, you may need to log out and log back in.

# -------------------------------
# 3. Install OpenJDK 17
# -------------------------------
echo "Installing OpenJDK 17..."
sudo apt-get install -y openjdk-17-jdk

# Set JAVA_HOME environment variable
echo "Setting JAVA_HOME to JDK 17..."
echo "JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64" | sudo tee -a /etc/environment
source /etc/environment

# Verify Java installation
java -version

# -------------------------------
# 4. Add Jenkins Repository and Install Jenkins LTS
# -------------------------------
echo "Adding Jenkins repository and installing Jenkins LTS..."

# Import the Jenkins GPG key
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

# Add the Jenkins repository to the sources list
sudo sh -c 'echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

# Update package lists after adding Jenkins repo
sudo apt-get update -y

# Install Jenkins
sudo apt-get install -y jenkins

# Start and enable Jenkins service
sudo systemctl start jenkins
sudo systemctl enable jenkins

# Verify Jenkins installation
sudo systemctl status jenkins

# -------------------------------
# 5. Install Terraform
# -------------------------------
echo "Installing Terraform..."

# Install prerequisites
sudo apt-get install -y software-properties-common

# Add HashiCorp GPG key
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg

# Add HashiCorp repository
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list

# Update package lists and install Terraform
sudo apt-get update -y
sudo snap install terraform -y 
sudo apt-get install -y terraform

# Verify Terraform installation
terraform -version

# -------------------------------
# 6. Install Git
# -------------------------------
echo "Installing Git..."
sudo apt-get install -y git

# Verify Git installation
git --version

# -------------------------------
# 7. Install Node.js and npm
# -------------------------------
echo "Installing Node.js and npm..."
sudo apt-get install -y nodejs npm

# Verify Node.js and npm installation
node -v
npm -v

# -------------------------------
# 8. Install SonarQube via Docker
# -------------------------------
echo "Installing SonarQube via Docker..."
docker pull sonarqube
docker run -d --name sonarqube -p 9000:9000 sonarqube

# -------------------------------
# 9. Install OWASP Dependency Check
# -------------------------------
echo "Installing OWASP Dependency Check..."
sudo apt-get install -y default-jre unzip
wget https://github.com/jeremylong/DependencyCheck/releases/download/v6.5.3/dependency-check-6.5.3-release.zip -P /tmp
sudo unzip /tmp/dependency-check-6.5.3-release.zip -d /opt/owasp/
sudo rm /tmp/dependency-check-6.5.3-release.zip

# Optional: Create a symbolic link for easy access
sudo ln -s /opt/owasp/dependency-check/bin/dependency-check.sh /usr/local/bin/dependency-check

# Verify Dependency Check installation
dependency-check.sh --version

# -------------------------------
# 10. Install Trivy (for FS and Image Scanning)
# -------------------------------
echo "Installing Trivy..."

# Install prerequisites
sudo apt-get install -y wget apt-transport-https gnupg2 software-properties-common

# Import Trivy GPG key
curl -fsSL https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo gpg --dearmor -o /usr/share/keyrings/trivy-archive-keyring.gpg

# Add Trivy repository
echo "deb [signed-by=/usr/share/keyrings/trivy-archive-keyring.gpg] https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/trivy.list

# Update package lists and install Trivy
sudo apt-get update -y
sudo apt-get install -y trivy

# Verify Trivy installation
trivy --version

# -------------------------------
# 11. Install Docker Compose
# -------------------------------
echo "Installing Docker Compose..."
sudo apt-get install -y docker-compose

# Verify Docker Compose installation
docker-compose --version

# -------------------------------
# 12. Install kubectl
# -------------------------------
echo "Installing kubectl..."

# Download the latest stable release
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# Install kubectl
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Clean up
rm kubectl

# Verify kubectl installation
kubectl version --client --short

# -------------------------------
# 13. Install ArgoCD CLI
# -------------------------------
echo "Installing ArgoCD CLI..."

# Fetch the latest ArgoCD release version from GitHub API
ARGOCD_VERSION=$(curl --silent "https://api.github.com/repos/argoproj/argo-cd/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

# Download the ArgoCD CLI binary
curl -sSL -o argocd-linux-amd64 https://github.com/argoproj/argo-cd/releases/download/${ARGOCD_VERSION}/argocd-linux-amd64

# Install ArgoCD CLI
sudo install -o root -g root -m 0755 argocd-linux-amd64 /usr/local/bin/argocd

# Clean up
rm argocd-linux-amd64

# Verify ArgoCD CLI installation
argocd version --client




# Install Azure CLI on Ubuntu/Debian

# Update the package list
sudo apt-get update -y

# Install the necessary dependencies
sudo apt-get install curl apt-transport-https lsb-release gpg -y

# Add the Microsoft signing key
curl -sL https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/microsoft.gpg > /dev/null

# Add the Azure CLI repository
AZ_REPO=$(lsb_release -cs)
echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | sudo tee /etc/apt/sources.list.d/azure-cli.list

# Update the package list again with the new repo
sudo apt-get update -y

# Install the Azure CLI
sudo apt-get install azure-cli -y



# -------------------------------
# 14. Final Message
# -------------------------------
echo "All installations complete!"
