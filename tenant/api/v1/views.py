from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .serializers import TenantSerializer
from tenant.models import Tenant


class TenantView(APIView):

    def get(self, request, *args, **kwargs):

        queryset = Tenant.objects.all()
        tenant_serializer = TenantSerializer(queryset, many=True)

        return Response(tenant_serializer.data, status=status.HTTP_201_CREATED)

    def post(self, request, *args, **kwargs):

        tenant_serializer = TenantSerializer(data=request.data)

        if tenant_serializer.is_valid():
            tenant_serializer.save()
            return Response(tenant_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(tenant_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            queryset = Tenant.objects.get(pk=pk)
        except Tenant.DoesNotExist:
            return JsonResponse({'message': 'The Tenant does not exist'}, status=status.HTTP_404_NOT_FOUND)
        queryset.delete()
        return JsonResponse({'message': 'Tenant was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)