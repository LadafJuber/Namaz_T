pipeline {
    agent any

    environment {
        // Define environment variables
        NODE_VERSION = '16' // Specify the Node.js version
        CI = 'true' // Set CI environment variable
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                // Install and use the specified Node.js version
                sh """
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
                    nvm install ${NODE_VERSION}
                    nvm use ${NODE_VERSION}
                """
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
