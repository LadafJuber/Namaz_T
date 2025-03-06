pipeline {
    agent any

    environment {
        CI = 'true' // Set CI environment variable
    }

    tools {
        nodejs 'Node 16' // Use the Node.js installation configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests (e.g., Jest, React Testing Library)
                sh 'npm test'
            }
        }

        stage('Lint Code') {
            steps {
                // Run ESLint to check code quality
                sh 'npm run lint'
            }
        }

        stage('Build Project') {
            steps {
                // Build the React.js project
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'Pipeline completed.'
        }
    }
}
