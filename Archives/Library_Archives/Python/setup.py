from setuptools import find_packages, setup

setup(
    name='TrAS',
    packages=find_packages(include="TrAS"),
    version='0.1.1',
    description='Translation Utilities',
    author='Circuitbreaker08, Uncover',
    author_email="circuitbreaker08@gmail.com",
    license="https://github.com/Uncover-F/TAS/blob/Uncover/LICENSE",
    url="https://github.com/Uncover-F/TAS/tree/Uncover",
    install_requires=['requests'],
    setup_requires=['pytest-runner'],
    tests_require=['pytest==4.4.1'],
    test_suite='tests',
)