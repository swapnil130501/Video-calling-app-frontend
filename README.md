# Real-Time Video Calling and Chat Application

## Overview
This project is a real-time video calling and chat application built using **WebRTC, Peer.js, WebSockets, and React**. It enables one-on-one and group video calls, along with live chat functionality. The architecture efficiently handles peer-to-peer communication and scales for multiple participants using an SFU (Selective Forwarding Unit) model.

![alt text](<Screenshot 2025-01-31 234205.png>)

## Features
- **One-on-One and Group Video Calls** using WebRTC
- **Live Chat** using WebSockets
- **Signaling Server** with Peer.js for connection establishment
- **STUN/TURN Server** support for NAT traversal
- **Scalability** with an SFU-based architecture
- **User Authentication** with JWT tokens
- **Call Controls** (Mute, Unmute, End Call, etc.)
- **Adaptive User Feed** for an optimized meeting experience

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Communication:** WebRTC, WebSockets, Peer.js
- **Servers:** STUN/TURN for NAT traversal
- **Containerization:** Docker

## Architecture
### WebRTC vs WebSockets
- **WebRTC** handles peer-to-peer media streaming with low latency.
- **WebSockets** provides a persistent, bidirectional communication channel, used for signaling and live chat.

### How It Works
1. **Signaling & Connection Establishment**: Peer.js assigns unique peer IDs and manages STUN/TURN servers.
2. **NAT Traversal**: STUN servers determine public IPs, while TURN servers relay media when direct connections fail.
3. **Media Streaming**: WebRTC establishes a direct connection between peers for low-latency video and audio.
4. **Scalability with SFU**: WebSockets act as an SFU, forwarding media streams to multiple users in a group call.

## Installation
### Prerequisites
- Node.js and npm/yarn
- Docker (optional for containerized deployment)

### Steps
1. Clone both the repositories:
   ```sh
   git clone https://github.com/swapnil130501/Video-calling-app-frontend
   git clone https://github.com/swapnil130501/Video-calling-app-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run dev
   ```
4. Start the peer.js server:
   ```sh
   peerjs --port 9000 --key peerjs --path /myapp
   ```
5. Start the frontend:
   ```sh
   npm run dev
   ```

## v2
- Implement screen sharing
- Add user authentication
- Improve UI/UX with animations


