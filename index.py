import requests

# Function to fetch code from GitHub Gist
def get_latest_code(gist_id, filename):
    gist_api_url = f'https://api.github.com/gists/{gist_id}'
    response = requests.get(gist_api_url)
    if response.status_code == 200:
        gist_data = response.json()
        if filename in gist_data['files']:
            return gist_data['files'][filename]['content']
    return None

# Get the Gist ID and filename
gist_id = '66e687c672113afccd3441b9d25ddd0f'  # Replace with your Gist ID
filename = 'index.py'  # Replace with your Python script's filename

# Fetch the latest code
latest_code = get_latest_code(gist_id, filename)

if latest_code:
    # Execute the fetched code
    exec(latest_code)
else:
    print("Failed to fetch the latest code.")
