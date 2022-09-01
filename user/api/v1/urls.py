from django.urls import path
from .register_view import RegisterView
from .views import MyObtainTokenPairView, UserView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('api/v1/login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/user/register/', RegisterView.as_view(), name='auth_register'),
    path('api/v1/user/', UserView.as_view()),
    path('api/v1/user/<int:pk>', UserView.as_view())
]