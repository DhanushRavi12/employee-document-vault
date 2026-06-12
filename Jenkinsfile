pipeline {
    agent any

    stages {

        stage('Git Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'git',
                    url: 'https://github.com/DhanushRavi12/employee-document-vault.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Employee Document Vault Build Successful'
            }
        }

        stage('Test') {
            steps {
                echo 'Pipeline Test Successful'
            }
        }
    }
}
