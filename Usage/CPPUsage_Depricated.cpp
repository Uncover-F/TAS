// Copyright 2024 Uncover-F
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// DEPRICATED - This code is no longer maintained and is not recommended for use.
// This code is provided as an example of how to interact with a Cloudflare Worker API.
// It is not intended to be used in production environments.

#include <sys/socket.h>
#include <iostream>
#include <string>
#include <sstream>
#include <netdb.h>
#include <unistd.h>

// Function to send HTTP GET request
std::string httpGet(const std::string& host, const std::string& path) {
    struct hostent* server = gethostbyname(host.c_str());
    if (!server) {
        std::cerr << "Error: No such host" << std::endl;
        return "";
    }

    int sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) {
        std::cerr << "Error: Opening socket" << std::endl;
        return "";
    }

    struct sockaddr_in serv_addr;
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(80);
    memcpy(&serv_addr.sin_addr.s_addr, server->h_addr, server->h_length);

    if (connect(sockfd, (struct sockaddr*)&serv_addr, sizeof(serv_addr)) < 0) {
        std::cerr << "Error: Connecting" << std::endl;
        return "";
    }

    std::stringstream request;
    request << "GET " << path << " HTTP/1.1\r\n";
    request << "Host: " << host << "\r\n";
    request << "Connection: close\r\n\r\n";

    ssize_t n = write(sockfd, request.str().c_str(), request.str().length());
    if (n < 0) {
        std::cerr << "Error: Writing to socket" << std::endl;
        return "";
    }

    std::string response;
    char buffer[4096];
    while ((n = read(sockfd, buffer, sizeof(buffer) - 1)) > 0) {
        buffer[n] = '\0';
        response += buffer;
    }
    if (n < 0) {
        std::cerr << "Error: Reading from socket" << std::endl;
        return "";
    }

    close(sockfd);

    return response;
}

// Function to extract JSON part from HTTP response
std::string extractJson(const std::string& response) {
    std::size_t start = response.find("\r\n\r\n");
    if (start == std::string::npos) {
        return "";
    }
    start += 4; // Skip past the "\r\n\r\n"
    return response.substr(start);
}

int main() {
    // Define the Cloudflare Worker endpoint URL
    std::string host = "655.mtis.workers.dev";
    std::string path = "/translate?text=Tell%20me%20a%20joke%20about%20Cloudflare&source_lang=en&target_lang=fr";

    // Send HTTP GET request
    std::string response = httpGet(host, path);

    // Extract JSON part from the response
    std::string jsonResponse = extractJson(response);

    // Print the JSON response
    std::cout << jsonResponse << std::endl;

    return 0;
}
