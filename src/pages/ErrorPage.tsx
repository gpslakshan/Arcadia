import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred. Please try again later.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Page not found";
      message = "Sorry, the page you are looking for does not exist.";
    } else if (error.status === 500) {
      title = "Internal server error";
      message = "Oops! Something broke on our end.";
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 transition-colors">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <CardContent className="flex flex-col items-center text-center p-8">
          <AlertTriangle className="h-14 w-14 text-red-500 dark:text-red-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
          <Button asChild className="rounded-xl px-6 py-2">
            <Link to="/">Go back home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorPage;
