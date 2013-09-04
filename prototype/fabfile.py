#!/usr/bin/env python
from fabric.api import task
import flickr_api
import requests
import json
import os
from PIL import Image


@task
def load_image(username='iphone_lomo', load_file=False):
    save_to = os.path.join( os.getcwd(), 'res', 'photos')

    photo_lst = []
    if not os.path.exists(save_to):
        os.makedirs(save_to)

    flickr_api.set_keys(api_key='de55944b9ca453372730df42309acf63', api_secret='04a10434fbfc8315')
    u = flickr_api.Person.findByUserName(username)

    photos = u.getPublicPhotos()

    for p in photos:
        p_info = p.getInfo()
        photo_lst.append({
            'id': p_info['id'],
            'location': p_info.get('location', None),
            'title': p_info['title'],
            'taken': p_info.get('taken', None)
        })

        if load_file:
            path_thumb = os.path.join(save_to, p.id + '_thumb.jpg')
            path_orig = os.path.join(save_to, p.id + '.jpg')
            p.save(path_thumb, 'Medium')
            p.save(path_orig, 'Original')

    with open(os.path.join(save_to, 'photo_lst.json'), 'wb') as f:
        f.write(json.dumps(photo_lst, indent=4))

    return photo_lst


@task
def touch_image_size():
    save_to = os.path.join(os.getcwd(), 'res', 'photos')
    photo_lst = []
    with open(os.path.join(save_to, 'photo_lst.json'), 'rb') as f:
        photo_lst = json.loads(f.read())

    for p in photo_lst:
        path_thumb = os.path.join(save_to, p['id'] + '_thumb.jpg')
        path_orig = os.path.join(save_to, p['id'] + '.jpg')

        p['size'] = {
            'thumb': Image.open(path_thumb).size,
            'orig': Image.open(path_orig).size
        }

    with open(os.path.join(save_to, 'photo_lst.json'), 'wb') as f:
        f.write(json.dumps(photo_lst, indent=4))
