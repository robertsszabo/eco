echo "building the solution"
npm run build
echo "clearing the cloud repository"
aws s3 rm s3://duplakavetripla.click --recursive 
echo "deploying to the builds content to cloud"
aws s3 cp ./build/ s3://duplakavetripla.click/ --recursive