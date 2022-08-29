# Bamboo BI  Content Management System Headless API

This application enables Django powered websites to have multiple tenants via PostgreSQL schemas. A vital feature for every Software-as-a-Service website.
        
    # Creat a new database
    CREATE DATABASE 'bbi_ecomm'


Basic Settings
You’ll have to make the following modifications to your settings.py file.

Your DATABASE_ENGINE setting needs to be changed to

    DATABASES = {
    'default': {
            # Tenant Engine
            'ENGINE': 'django_tenants.postgresql_backend',
            # set database name
            'NAME': 'bbi_ecomm_master',
            # set your user details
            'USER': 'postgres',
            'PASSWORD': 'your_password',
            'HOST': 'localhost',
            'POST': '5432'
        }
    }

Make migrations and Apply to database

    # create migrations files
    python manage.py makemigrations
    # Apply migrations
    python manage.py migrate

To set up Lao language, make folder in project directory:

    mkdir locale/
    mkdir locale/la/

    python manage.py makemessages -l la -i venv
    python manage.py compilemessages -l la
    python manage.py migrate

Setup Initial User, Tenant and Admin
        
    # create first user
    python manage.py createsuperuser
    # Create the Public Schema
    python manage.py create_tenant
        # example
        schema name: public
        user: 1
        paid until:2022-12-31
        on trial:False
        is active: True
        
    # Create the Administrator
    python manage.py create_tenant_superuser
        # example
        Enter Tenant Schema ('?' to list schemas): public
    python manage.py runserver