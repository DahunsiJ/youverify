# RegTech Application - Scalable, Secure, and Compliant Cloud Infrastructure

## Overview
This repository contains the Infrastructure as Code (IaC) implementation and CI/CD pipeline configuration for deploying a secure, scalable cloud infrastructure designed to meet the needs of a fictional RegTech application that processes sensitive financial data. The solution adheres to strict regulatory requirements such as GDPR and PCI-DSS.

## Tools and Technologies
- **Terraform**: Used for provisioning and managing the Azure cloud infrastructure.
- **Azure Kubernetes Service (AKS)**: Provides scalable container orchestration to manage application deployment.
- **Jenkins**: Configured to automate the CI/CD pipeline for continuous integration and deployment.
- **SonarQube**: Integrated for static code analysis to ensure code quality and identify security vulnerabilities.
- **Trivy**: Utilized for container image scanning to ensure that the images are secure and free of known vulnerabilities.
- **OWASP Dependency Check**: Used to check dependencies for known security vulnerabilities.
- **Azure Key Vault**: Used for securely storing secrets, API keys, and certificates.
- **Prometheus and Grafana**: Deployed for monitoring infrastructure health and setting up alert mechanisms.
- **Azure Security Center**: Configured to monitor threats and compliance requirements.
- **IAM Policies and VPC**: Used to implement network segmentation and control access to cloud resources.

---

## Infrastructure Design
The infrastructure is designed to be secure, scalable, and resilient, ensuring that the application can handle fluctuating traffic while adhering to compliance standards.

### 1. **Kubernetes Cluster (AKS)**
   - **Provisioned via Terraform**: The cluster is deployed on Azure Kubernetes Service (AKS) using Terraform as the IaC tool. This provides scalability for the application, allowing it to handle multiple replicas and increasing availability.
   - **Network Security**: The AKS cluster is integrated into a Virtual Private Cloud (VPC) with security groups and firewall rules to control access. All sensitive data at rest and in transit is encrypted.

### 2. **CI/CD Pipeline**
   - **Jenkins Pipeline**: A fully automated CI/CD pipeline is implemented using Jenkins. It automates the build, test, and deployment phases of the application.
     - **Steps**:
       1. **Source Code Checkout**: The code is pulled from the Git repository.
       2. **Code Analysis**: SonarQube and OWASP Dependency Check are run to analyze the code quality and security vulnerabilities.
       3. **Container Build**: Docker images are built for the application.
       4. **Security Scans**: Trivy scans the images for vulnerabilities.
       5. **Deployment to Kubernetes**: Successfully scanned images are deployed to the AKS cluster.
       6. **Rollback Mechanism**: Jenkins includes a rollback mechanism to revert to a previous version in case of deployment failure.

### 3. **Security and Compliance**
   - **Encryption**: Azure Key Vault is used to manage sensitive information, such as database credentials, API keys, and SSL certificates. All sensitive data is encrypted both at rest and in transit using TLS.
   - **Access Control**: Implemented fine-grained IAM policies to restrict access to resources based on the principle of least privilege.
   - **Threat Monitoring**: Azure Security Center is configured to continuously monitor for potential threats, vulnerabilities, and compliance violations.
   - **Compliance**: The infrastructure is designed to be compliant with industry regulations like GDPR and PCI-DSS.
     - **GDPR**: Data encryption, user access control, and audit trails are established.
     - **PCI-DSS**: Network segmentation, encryption, and continuous security monitoring ensure PCI-DSS compliance.

### 4. **Monitoring and Logging**
   - **Prometheus**: Deployed for real-time monitoring of infrastructure health, gathering metrics like CPU, memory usage, and response times.
   - **Grafana**: Integrated with Prometheus to provide a user-friendly dashboard for visualizing performance metrics and setting up alerts for potential issues.
   - **Logging (ELK Stack)**: While the ELK stack was not fully integrated, its components are installed in the infrastructure. Full integration will allow for centralized logging and log analysis, making it easier to identify and address issues.

---

## Security Best Practices Implemented
- **Encryption**: Data is encrypted both in transit and at rest using Azure Key Vault and TLS for data in transit.
- **Access Control**: Fine-grained IAM policies are enforced to minimize unauthorized access.
- **Threat Detection**: Azure Security Center provides real-time alerts for security breaches or compliance violations.
- **Code and Dependency Scanning**: Tools like SonarQube, Trivy, and OWASP Dependency Check ensure that the codebase and container images are free from security vulnerabilities.
- **Monitoring**: Prometheus and Grafana are used to track the health and performance of the infrastructure and applications.

---

## Known Issues
- **ELK Stack**: The ELK stack (Elasticsearch, Logstash, Kibana) has been installed but is not fully integrated due to time constraints. I will be happy to complete the integration shortly if required.

---

## How to Deploy
1. Clone this repository:
   ```bash
   git clone https://github.com/DahunsiJ/youverify_DevSecOps.git
   cd youverify_DevSecOps
