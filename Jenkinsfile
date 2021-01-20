pipeline {

  agent any

  tools { nodejs "node" }
 
  stages {

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test-consumer'
      }
    }

    stage('Publish Pact') {
      steps {
        sh 'npm run publish-pacts'
      }
    }
    
    stage('Can I deploy?') {
      steps {
        sh 'npm run can-i-deploy'
      }
    }

  }
}