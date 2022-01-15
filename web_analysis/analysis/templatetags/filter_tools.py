from html import escape

from django.template.defaulttags import register
from django.utils.safestring import mark_safe, SafeData
from django.utils.text import normalize_newlines


@register.filter
def get_item(dictionary, key):
    return dictionary.get(key)


@register.filter(is_safe=True, needs_autoescape=True)
# @stringfilter
def mylinebreaksbr(value, autoescape=True):
    """
    Convert all newlines in a piece of plain text to HTML line breaks
    (``<br>``).
    """
    autoescape = autoescape and not isinstance(value, SafeData)
    value = normalize_newlines(value)
    if autoescape:
        value = escape(value)
    return mark_safe(value.replace('\n', '<br>').replace(' ', '&nbsp;'))
