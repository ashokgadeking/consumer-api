pipeline {
  agent any

  tools {nodejs "node"}
 
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Install') {
      steps {
        sh 'npm run test-consumer'
      }
    }
  }
}