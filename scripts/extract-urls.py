import re
import sys

def extract_urls_from_content(content):
    # Regex to match common URLs (http/https, ending at whitespace or punctuation)
    url_pattern = r'https?://[^\s\)"\']+'
    return set(re.findall(url_pattern, content))

def parse_merged_file(text):
    unique_urls = set()
    current_file = None
    in_code_block = False
    content_buffer = []

    lines = text.splitlines()
    for line in lines:
        if line.startswith('## File: '):
            # Process previous file's content if any
            if current_file and content_buffer:
                content = '\n'.join(content_buffer)
                urls = extract_urls_from_content(content)
                unique_urls.update(urls)
            
            # Start new file
            current_file = line.split('## File: ')[1].strip()
            content_buffer = []
            in_code_block = False
        
        elif line.strip() == '```markdown':
            in_code_block = True
        elif line.strip() == '```' and in_code_block:
            in_code_block = False
        elif in_code_block:
            content_buffer.append(line)
    
    # Don't forget the last file
    if current_file and content_buffer:
        content = '\n'.join(content_buffer)
        urls = extract_urls_from_content(content)
        unique_urls.update(urls)
    
    return unique_urls

# Read the input text (you can replace this with file reading if needed)
# For this example, paste the entire merged file text here or read from stdin/file
if len(sys.argv) > 1:
    with open(sys.argv[1], 'r') as f:
        input_text = f.read()
else:
    input_text = sys.stdin.read()  # Or paste the text directly here for testing

# Extract unique URLs
unique_urls = parse_merged_file(input_text)

# Output the results
print("Unique URLs found:")
for url in sorted(unique_urls):
    print(url)

# Optionally save to a file
with open('unique_urls.txt', 'w') as f:
    for url in sorted(unique_urls):
        f.write(url + '\n')
print(f"\nSaved {len(unique_urls)} unique URLs to 'unique_urls.txt'")
