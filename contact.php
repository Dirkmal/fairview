<?php
	switch($_SERVER['REQUEST_METHOD']){
		case("OPTIONS"): //Allow preflighting to take place.
			header("Access-Control-Allow-Origin: *");
			header("Access-Control-Allow-Methods: POST");
			header("Access-Control-Allow-Headers: content-type");
			exit;
		case("POST"): //Send the email;
			header("Access-Control-Allow-Origin: *");
			
			$json = file_get_contents('php://input');
			
			$recipient = "contact@fairviewnigeria.com";
			$params = json_decode($json);

			$customer_email = $params->data->email;
			$customer_name = $params->data->name;
			$subject = $params->data->subject;
			$message = $params->data->message;

			$field = filter_var($customer_email, FILTER_SANITIZE_EMAIL);
			if (filter_var($customer_email, FILTER_VALIDATE_EMAIL)) {
				$headers = "From: $customer_name <$customer_email>";

				if (mail($recipient, $subject, $message, $headers)) {
					echo json_encode([
						"message" => "Message sent successfully.",
						"status" => 200
					]);
				} else {
					echo json_encode([
						"message" => "Message not sent.",
						"status" => 400
					]);
				}
			} else {
				echo json_encode([
					"message" => "Invalid email address.",
					"status" => 400
				]);
			}	
			
			break;
		default: //Reject any non POST or OPTIONS requests.
			header("Allow: POST", true, 405);
			exit;
	}
?>