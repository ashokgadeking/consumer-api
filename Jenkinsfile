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
    
    stage('Publish Pact') {
      steps {
        sh './pact-broker --help'
      }
    }
  }
}