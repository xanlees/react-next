from django.urls import path
from user.register_view import RegisterView
from user.views import MyObtainTokenPairView, UserView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('', UserView.as_view()),
    path('<int:pk>', UserView.as_view())
]