pipeline {
   agent any
   stages {
        stage('Checkout') {
            steps {
                docker.image('node:latest').inside {
				  sh 'la -la'
				}
            }
        }     
    }
}