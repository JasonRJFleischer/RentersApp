from django.conf.urls import patterns, url

from django_app.gallery import views


urlpatterns = patterns('',
                       url(
                           regex=r'^ (?P < pk >\d+)/ajax-upload /$,
                           view=views.AjaxPhotoUploadView.as_view(),
                           name='ajax_photo_upload_view',
                       ),
                       )
