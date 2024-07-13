from setuptools import setup, find_packages

setup(
    name='tastranslation',
    version='0.2',
    packages=find_packages(),
    install_requires=[
        'requests',
    ],
    entry_points={
        'console_scripts': [
            'tastranslate = tastranslation.translate:main',
        ],
    },
    author='Uncover-F',
    author_email='shlok.mayur.o@gmail.com',
    description='Python package for interacting with the TAS API',
    long_description='''Python package for interacting with Cloudflare Worker translation endpoint''',
    long_description_content_type='text/markdown',
    url='https://github.com/Uncover-F/TAS',
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent'])
