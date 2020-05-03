
#  <p align='center'> :dart: Learning gRPC communication  </p> 

## :rocket: Install and run  
- Set the environment variables
```dash
	cd server-service 
	npm install
	npm start 

	cd ../client-service
	npm install
	npm start
```

## :computer: Communication
<p> Both client-service and server-service server a swagger exposed at  <strong> /documentation</strong> and this can be used to know if the service is working e serving the right response, then, both services exposes and HTTP/REST interface, 
</p>
<p> 
<strong> Server-services </strong> is exposing <strong> gRPC interface </strong> to communicate with other service and server the same response like the <strong> HTTP/REST interface </strong>, then the <strong>client-service</strong> can  call the server-service <strong> by gRPC protocol </strong>.
</p>
<p> 
Use the swagger to make the test.
</p>

## <p align='right'> With :heart: by JV </p> 
