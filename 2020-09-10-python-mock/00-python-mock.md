Mocking en Python
Una petita introducció

Què és mocking?
Un objecte mock subtitueix i imita un objecte real en un entorno de testing.

Llibreries per treballar Mocks in Python
unitests
nose
pytest

La llibreria unittest de Python
La llibreria unittest de Python inclou un subpaquet anomenat unittest.mock.
Aquesta llibreria provee:
un objecte Mock que imitarà objectes reals
la funció patch() que reemplaça objectes amb Mock instances, patch() es pot fer servir com a un decorator o un context manager
Per instal·lar la llibreria unittest.mock en versions de python anteriors a 3.3: pip install mock.
La documentació de la llibraria és aquí: https://docs.python.org/3/library/unittest.mock.html



Codi exemple utilitzat
class MyClass():
    def my_method(self):
        pass  


class SomeOtherClassThatUsesMyClass():
    def method_under_test(self):
        myclass = MyClass()
        return myclass.my_method()

Importar la llibreria Mock
from mock import patch, Mock


@patch.object
Mockejar un mètode en una classe i retornar un valor específic

Decorator
@patch.object(my_module.MyClass, 'my_method')
def test_my_method_shouldReturnTrue_whenMyMethodReturnsSomeValue(self, mock_my_method):
    mock_my_method.return_value=True
    some_other_class =  SomeOtherClassThatUsesMyClass()
    result = some_other_class.method_under_test()
    self.assertTrue(result)
Context manager
def test_my_method_shouldReturnTrue_whenMyMethodReturnsSomeValue(self):
    with patch('my_module.MyClass') as mock_my_method:
        mock_my_method.return_value=True
        some_other_class =  SomeOtherClassThatUsesMyClass()
        result = some_other_class.method_under_test()
        self.assertTrue(result)

Exemples en ERP
addons/gisce/SomEnergia/som_polissa_administradora/tests/tests_administradora.py

def add_contract_administrator(self, cursor, uid, polissa_id, partner_id, context=None):
    	if context is None:
        		context = {}
    	if not self.validate_partner(cursor, uid, partner_id):
        		return False
	….
@mock.patch.object(giscedata_polissa.GiscedataPolissa, “validate_partner”)
def test_add_contract_administrator__polissa_invalid_partner(self, mock_validate_partner):
    	pol_obj = self.model('giscedata.polissa')
    	res_partner_obj = self.model('res.partner')
    	partner_id = 1
    	polissa_id = 1

    	mock_validate_partner.return_value = False

    	result = pol_obj.add_contract_administrator(self.cursor, self.uid, polissa_id, partner_id, context={})

    	self.assertFalse(result) 


def add_contract_administrator(self, cursor, uid, polissa_id, partner_id, context=None):
    	...
    	if not self.validate_partner(cursor, uid, partner_id):
        		return False
	administradora = self.read(cursor, uid, polissa_id, [‘administradora’])[‘administradora’]
	….
        	
@mock.patch.object(giscedata_polissa.GiscedataPolissa, “read”)
@mock.patch.object(giscedata_polissa.GiscedataPolissa, “validate_partner”)
def test_add_contract_administrator__polissa_without_administradora(self, mock_validate_partner, mock_read_polissa):
    	pol_obj = self.model('giscedata.polissa')
    	res_partner_obj = self.model('res.partner')
    	partner_id = 1
    	polissa_id = 1
                   mock_read_polissa.return_value={‘administradora’: None}
    	mock_validate_partner.return_value = True

    	result = pol_obj.add_contract_administrator(self.cursor, self.uid, polissa_id, partner_id, context={})

    	self.assertTrue(result) 
                   ….


def add_contract_administrator(self, cursor, uid, polissa_id, partner_id, context=None):
    	...
    	if not self.validate_partner(cursor, uid, partner_id):
        		return False
	administradora = self.read(cursor, uid, polissa_id, [‘administradora’])[‘administradora’]
	….
        	self.add_administrator_category(cursor, uid, administradora[0])
	….
@mock.patch.object(giscedata_polissa.GiscedataPolissa, “read”)
@mock.patch.object(giscedata_polissa.GiscedataPolissa, “validate_partner”)
def test_add_contract_administrator__polissa_without_administradora(self, mock_validate_partner, mock_read_polissa):
    	pol_obj = self.model('giscedata.polissa')
    	res_partner_obj = self.model('res.partner')
    	partner_id = 1
    	polissa_id = 1
                   mock_read_polissa.return_value={‘administradora’: None}
    	mock_validate_partner.return_value = True

    	result = pol_obj.add_contract_administrator(self.cursor, self.uid, polissa_id, partner_id, context={})

    	self.assertTrue(result) 
                   partner = res_partner_obj.browse(self.cursor, self.uid, partner_id)
                   admin_cat = pol_obj.get_admin_cat(self.cursor, self.uid)

                   self.assertEqual(admin_cat.id, partner.category_id[0].id)


side_effect
Mockejar un mètode en una classe amb @patch.object i retornar un valor different cada vegada que es crida

@patch.object(my_module.MyClass, 'my_method')
def test_my_method_shouldReturnMultipleValues_whenMyMethodReturnsSomeValue(self, mock_my_method):
	list_of_return_values= [True,False,False]

	def side_effect():
    		return list_of_return_values.pop()

	mock_my_method.side_effect = side_effect
	some_other_class =  SomeOtherClassThatUsesMyClass()

	self.assertFalse(some_other_class.method_under_test())
	self.assertFalse(some_other_class.method_under_test())
	self.assertTrue(some_other_class.method_under_test())



def add_contract_administrator(self, cursor, uid, polissa_id, partner_id, context=None):
    	...
    	if not self.validate_partner(cursor, uid, partner_id):
        		return False
	administradora = self.read(cursor, uid, polissa_id, [‘administradora’])[‘administradora’]

                  if administradora and administradora[0] != partner_id:
            		self.remove_administrator_category(cursor, uid, administradora[0])
        	
self.add_administrator_category(cursor, uid, administradora[0])
	self.write(cursor, uid, polissa_id, {'administradora': partner_id})

                   return True
def remove_administrator_category(self, cursor, uid, partner_id):
        administrated_contracts = self.search(cursor, uid, [("administradora", "=", partner_id)])

        if len(administrated_contracts) == 1:
            admin_cat = self.get_admin_cat(cursor, uid)
            res_partner_obj = self.pool.get('res.partner')
            res_partner_obj.write(cursor, uid, partner_id, {'category_id': [(3, admin_cat.id)]})

    @mock.patch.object(giscedata_polissa.GiscedataPolissa, "read")
    @mock.patch.object(giscedata_polissa.GiscedataPolissa, "remove_administrator_category")
    @mock.patch.object(giscedata_polissa.GiscedataPolissa, "validate_partner")
    def test_add_contract_administrator__polissa_with_administradora(self, mock_validate_partner,
                                                                            mock_remove_administrator_category,
                                                                            mock_read_polissa):  
        pol_obj = self.model('giscedata.polissa')
        res_partner_obj = self.model('res.partner')

        partner_id = 1
        polissa_id = 1

        mock_read_polissa.return_value = { 'administradora': [2] }  
        mock_validate_partner.return_value = True

        def remove_administrator_category_mock(cursor, uid, partner_id):
            pass

        mock_remove_administrator_category.side_effect = remove_administrator_category_mock

        result = pol_obj.add_contract_administrator(self.cursor, self.uid, polissa_id, partner_id, context={})
        
        self.assertTrue(result) 

        pol_obj.remove_administrator_category.assert_called_once_with(self.cursor, self.uid, 2)


Un altre exemple en ERP
https://github.com/gisce/erp/pull/10927/files#diff-cc477805ade52b342f09b4f67330659a


Altres Assertions interessants
assert_called(): el mock es cridat al menys una vegada
assert_called_once(): el mock es cridat exactament una vegada
assert_called_with(*args, **kwargs): la crida s’ha fet en una manera particular
assert_called_once_with(*args, **kwargs): s’ha cridat exactament una vegada i amb uns arguments específics
assert_any_call(*args, **kwargs): s’ha cridat amb els arguments especificats
assert_not_called(): el mock mai ha estat cridat



@patch



@patch('my_module.MyClass')
def test_my_method_shouldCallMyClassMethodMyMethod_whenSomeOtherClassMethodIsCalled(self, mock_my_class):
	some_other_class =  SomeOtherClassThatUsesMyClass()
	some_other_class.method_under_test()
	self.assertTrue(mock_my_class.called)




Mockejar una classe sensera

@patch('my_module.MyClass')
def test_my_method_shouldReturnTrue_whenSomeOtherClassMethodIsCalledAndAReturnValueIsSet(self, mock_my_class):
    mc = mock_my_class.return_value
    mc.my_method.return_value = True

    some_other_class =  SomeOtherClassThatUsesMyClass()
    result = some_other_class.method_under_test()

    self.assertTrue(result) 




Mockejar una classe sensera i establir el valor de retorno d’un mètode de la classe


@mock.patch.object(giscedata_polissa.GiscedataPolissa, “read”)
@mock.patch.object(giscedata_polissa.GiscedataPolissa, “validate_partner”)
def test_add_contract_administrator__polissa_without_administradora(self, mock_validate_partner, mock_read_polissa):
    	pol_obj = self.model('giscedata.polissa')
    	res_partner_obj = self.model('res.partner')
    	partner_id = 1
    	polissa_id = 1
                   mock_read_polissa.return_value={‘administradora’: None}
    	mock_validate_partner.return_value = True

    	result = pol_obj.add_contract_administrator(self.cursor, self.uid, polissa_id, partner_id, context={})
    	self.assertTrue(result) 
                   ….
@mock.patch(“som_polissa_administradora.giscedata_polissa.GiscedataPolissa”)
def test_add_contract_administrator__polissa_without_administradora(self, mock_polissa):
    	pol_obj = self.model('giscedata.polissa')
    	res_partner_obj = self.model('res.partner')
    	partner_id = 1
    	polissa_id = 1
                     mock_polissa.read.return_value={‘administradora’: None}
    	mock_polissa.validate_partner.return_value = True

    	result = pol_obj.add_contract_administrator(self.cursor, self.uid, polissa_id, partner_id, context={})
    	self.assertTrue(result) 
                   ….


Alguns links interessants
https://realpython.com/python-mock-library/ 
https://www.toptal.com/python/an-introduction-to-mocking-in-python
https://semaphoreci.com/community/tutorials/getting-started-with-mocking-in-python
https://myadventuresincoding.wordpress.com/2011/02/26/python-python-mock-cheat-sheet/
 https://docs.python.org/3/library/unittest.mock-examples.html
https://realpython.com/courses/python-mock-object-library/
