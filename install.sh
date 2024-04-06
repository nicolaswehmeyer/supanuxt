#!/usr/bin/env bash
welcome_banner() {
  echo "--------------------------------------------------------------------------------"
  echo "--------------------------------------------------------------------------------"
  echo '
  /$$$$$$                                /$$   /$$                       /$$    
 /$$__  $$                              | $$$ | $$                      | $$    
| $$  \__/ /$$   /$$  /$$$$$$   /$$$$$$ | $$$$| $$ /$$   /$$ /$$   /$$ /$$$$$$  
|  $$$$$$ | $$  | $$ /$$__  $$ |____  $$| $$ $$ $$| $$  | $$|  $$ /$$/|_  $$_/  
 \____  $$| $$  | $$| $$  \ $$  /$$$$$$$| $$  $$$$| $$  | $$ \  $$$$/   | $$    
 /$$  \ $$| $$  | $$| $$  | $$ /$$__  $$| $$\  $$$| $$  | $$  >$$  $$   | $$ /$$
|  $$$$$$/|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$ \  $$|  $$$$$$/ /$$/\  $$  |  $$$$/
 \______/  \______/ | $$____/  \_______/|__/  \__/ \______/ |__/  \__/   \___/  
                    | $$                                                        
                    | $$                                                        
                    |__/                                                        
  '
  echo "--------------------------------------------------------------------------------"
  echo "--------------------------------------------------------------------------------"
}

check_node_version() {
  required_version="18"
  current_version=$(node -v | sed 's/v//' | awk -F '.' '{print $1}')
  if (( $(echo "$current_version >= $required_version" | bc -l) )); then
    echo "Node.js version $current_version is satisfying minimum Node version $required_version."
  else
    echo "Node.js version $current_version is below minimum Node $required_version. Aborting."
    exit 1
  fi
}

requirements_satisfied() {
  # Check if node and yarn are installed
  hash node 2>/dev/null || {
    echo >&2 "Node is required but not installed. Aborting."
    exit 1
  }
  hash yarn 2>/dev/null || {
    echo >&2 "Yarn is required but not installed. Aborting."
    exit 1
  }
  check_node_version
  echo "All Installation requirements are met. Continuing."
}

download_repository() {
  echo "Downloading repository from Github"
  git clone https://github.com/nicolaswehmeyer/supanuxt
  cd supanuxt
}

clean_project_dir() {
  echo "Cleaning up project directory."
  rm -rf ./node_modules
  rm -rf ./*.lock
}

install_dependencies() {
  echo "\n"
  echo "Installing all required dependencies using Yarn:"
  echo "------------------------------------------------"
  yarn install
  echo "------------------------------------------------"
}

setup_supabase() {
  echo "Connecting to your Supabase project."
  yarn supabase login
  echo "Open your browser and grab your Supabase project reference."
  echo "Hint: You'll find your Project Reference ID from the Supabase Project Dashboard under Project Settings -> General"
  read -p "Press Enter to navigate to https://supabase.com/dashboard/projects now. "
  python3 -m webbrowser https://supabase.com/dashboard/projects
  read -p "Paste your project url below (this is not your project URL): " project_reference_id
  echo "Make sure you got your database password ready (can be set in your Supabase project as well)."
  yarn supabase link --project-ref $project_reference_id
  echo "Updating your Supabase project and pushing changes to your online Supabase repository."
  yarn supabase db push
}

set_env_variables() {
  echo "Next, we will set up then .env file accordingly."
  cp ./.env.example ./.env
  read -p "Copy & paste your Supabase Project URL (Project Settings -> API -> URL): " project_url
  read -p "Copy & paste your Supabase Project API-KEY (Project Settings -> API -> Project API keys): " project_api_key
  sed -i '' -e "s#https://example.supabase.co#${project_url}#g" ./.env
  sed -i '' -e "s#Your.Supabase.API.KEY.Goes.Here#${project_api_key}#g" ./.env
  echo "Updated .env file."
}

start_server() {
  echo "--------------------------------------------------------------------------------"
  echo "--------------------------------------------------------------------------------"
  echo "Starting development server now 🔥🚀"
  yarn dev
}

main() {
  welcome_banner
  requirements_satisfied
  clean_project_dir
  download_repository
  install_dependencies
  setup_supabase
  set_env_variables
  start_server
}

main
