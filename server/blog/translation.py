from modeltranslation.translator import register, TranslationOptions
from blog.models import Post, Tags


@register(Tags)
class TagsTranslation(TranslationOptions):
    fields = ('name',)
    required_languages = ('he',)


@register(Post)
class PostTranslation(TranslationOptions):
    fields = ('title', 'author', 'body')
    required_languages = ('he',)
