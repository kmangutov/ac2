# Armada QTUM Hackathon

Armada built for QTUM Hackathon

#Technologies Used:

-QTUM
-Ethereum

To run demo:

- Need to run local blockchain

#Steps

$ docker run -d --rm --name myapp -v `pwd`:/dapp -p 9899:9899 -p 9888:9888 -p 3889:3889 spacemanholdings/qtum-portal-dev
$ docker exec -it myapp sh 
$ qcli generate 600

